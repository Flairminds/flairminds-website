/**
 * Google Sheets Service
 * Fetches job openings from a public Google Sheet
 */

// TODO: Replace with your actual Google Sheet ID
const SHEET_ID = '1wIDo-8CC8g42xNFKNYTKTHZRCwj5LCjCr1ul7aG55y8';
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

/**
 * Generate a unique ID from job title and experience
 * Example: "Senior Full Stack Developer" + "2+ years" => "FM_SFD_2"
 */
const generateJobId = (title, experience) => {
    // Extract initials from title
    const titleWords = title.split(' ').filter(word =>
        !['and', 'the', 'of', 'for', 'in'].includes(word.toLowerCase())
    );
    const initials = titleWords.map(word => word.charAt(0).toUpperCase()).join('');

    // Extract number from experience (e.g., "2+ years" => "2")
    const expNumber = experience.match(/\d+/)?.[0] || '';

    return `FM_${initials}_${expNumber}`;
};

/**
 * Parse CSV data to JSON
 * Properly handles quoted values from Google Sheets
 */
const parseCSV = (csvText) => {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return [];

    // Parse CSV line considering quoted values
    const parseLine = (line) => {
        const result = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        result.push(current.trim());

        // Clean extra quotes from values
        return result.map(val => {
            // Remove surrounding quotes and unescape internal quotes
            if (val.startsWith('"') && val.endsWith('"')) {
                val = val.slice(1, -1);
            }
            // Remove escaped quotes
            val = val.replace(/\\"/g, '"').replace(/""/g, '"');
            return val.trim();
        });
    };

    const headers = parseLine(lines[0]);
    const jobs = [];

    for (let i = 1; i < lines.length; i++) {
        const values = parseLine(lines[i]);
        const job = {};

        headers.forEach((header, index) => {
            job[header] = values[index] || '';
        });

        // Generate unique ID
        if (job.title && job.experience) {
            job.id = generateJobId(job.title, job.experience);
        }

        jobs.push(job);
    }

    return jobs;
};

/**
 * Fetch job openings from Google Sheets
 */
export const fetchJobOpenings = async () => {
    try {
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch job data from Google Sheets');
        }

        const csvText = await response.text();
        const allJobs = parseCSV(csvText);

        // Filter to only show jobs with status "Open"
        const openJobs = allJobs.filter(job =>
            job.status && job.status.toLowerCase() === 'open'
        );

        return {
            success: true,
            data: openJobs,
            message: 'Jobs fetched successfully'
        };
    } catch (error) {
        console.error('Error fetching jobs from Google Sheets:', error);
        return {
            success: false,
            data: [],
            message: error.message || 'Failed to fetch job openings'
        };
    }
};
