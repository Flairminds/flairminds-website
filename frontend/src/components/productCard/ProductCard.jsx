import React, { useState } from "react";
import productCardStyles from "./ProductCard.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import Dropdown from "../dropdown/Dropdown";
import { useDispatch } from "react-redux";
import {
  setDemoLink,
  setShareLink,
  toggleDemoModal,
} from "../../redux/slices/visitorDetailsModalSlice";
import { motion } from "framer-motion";

const ProductCard = React.memo(({ prop }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const containerVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const highlightPhrases = (text, phrases) => {
    if (!phrases || phrases.length === 0) return text;

    let parts = [text];

    phrases.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");

      parts = parts.flatMap((part) =>
        typeof part === "string"
          ? part
              .split(regex)
              .map((p, i) =>
                p.toLowerCase() === phrase.toLowerCase() ? (
                  <strong key={i}>{p}</strong>
                ) : (
                  p
                ),
              )
          : [part],
      );
    });

    return parts;
  };

  return (
    <div className={productCardStyles.product_card} id={prop.id}>
      <div className={productCardStyles.product_card_innner_container}>
        {/* IMAGE */}

        <div className={productCardStyles.image_container}>
          <div className={productCardStyles.product_card_image}>
            {prop.image.endsWith("mp4") ? (
              <video src={prop.image} loop muted autoPlay />
            ) : (
              <img src={prop.image} alt={prop.name} />
            )}
          </div>
        </div>

        {/* DETAILS */}

        <motion.div
          className={productCardStyles.details_container}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 variants={itemVariants}>
            {prop?.name?.toUpperCase()}
          </motion.h1>

          {/* TAGS */}

          <motion.div className={productCardStyles.tags}>
            {prop.tags?.map((tag, i) => (
              <span key={i} className={productCardStyles.tag}>
                {tag}
              </span>
            ))}

            {prop.techTags?.map((tag, i) => (
              <span key={i} className={productCardStyles.tech_tag}>
                {tag}
              </span>
            ))}
          </motion.div>

          {/* DESCRIPTION */}

          <motion.div
            className={productCardStyles.description}
            animate={{ height: expanded ? "auto" : 180 }}
            transition={{ duration: 0.4 }}
          >
            {prop.detailsParagraphs?.map((paragraph, i) => (
              <motion.p variants={itemVariants} key={i}>
                {highlightPhrases(paragraph, prop.highlight)}
              </motion.p>
            ))}

            <motion.ul className={productCardStyles.bullets}>
              {prop.list?.map((item, i) => (
                <motion.li key={i} variants={itemVariants}>
                  {highlightPhrases(item, prop.highlight)}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p variants={itemVariants}>
              {highlightPhrases(prop.cta, prop.highlight)}
            </motion.p>
          </motion.div>

          {/* READ MORE */}

          <button
            className={productCardStyles.read_more}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>

          {/* BUTTONS */}

          <motion.div
            className={productCardStyles.actions}
            variants={itemVariants}
          >
            {prop.buttonText && (
              <button
                onClick={() => window.open(prop.projectLink)}
                className={productCardStyles.primary_button}
              >
                {prop.buttonText}
                <FaArrowRight />
              </button>
            )}

            {prop.chatbot && <Dropdown chatbot={prop.chatbot} />}

            {prop.demoButton && (
              <button
                className={productCardStyles.secondary_button}
                onClick={() => {
                  dispatch(setDemoLink({ demoLink: prop.demoLink }));
                  dispatch(toggleDemoModal());
                }}
              >
                View Demo
                <MdOutlineVideoLibrary />
              </button>
            )}

            <button
              className={productCardStyles.secondary_button}
              onClick={() =>
                dispatch(setShareLink({ shareName: prop.linkDisplay }))
              }
            >
              Share Link
              <IoIosShareAlt />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* UPCOMING FEATURES */}

      {prop.upcomingFeatures?.length > 0 && (
        <div className={productCardStyles.upcoming_features}>
          <h2>Upcoming Features</h2>
          {prop.upcomingFeatures.map((feature, i) => (
            <p key={i}>{feature}</p>
          ))}
        </div>
      )}
    </div>
  );
});

export default ProductCard;
