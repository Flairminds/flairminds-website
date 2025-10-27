import React, { useEffect, useRef, useState } from 'react'
import individualProductStyles from './IndividualProduct.module.css'
import illustration from '../../assets/illustration.png'
import illustration1 from '../../assets/fmbg1.png'
import illustration2 from '../../assets/illustration.png'
import illustration3 from '../../assets/fmbg1.png'
import illustration4 from '../../assets/illustration.png'
import { div } from 'motion/react-client'
import { MdKeyboardArrowDown } from "react-icons/md";

const IndividualProduct = () => {
    const [imageNo,setImageNo]=useState(0);
    const productDetails=[
        {
            id:1,
            heading : "Point number 1",
            details : "lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae in aliquid? Nihil perferendis necessitatibus inventore distinctio animi dolore! Sequi officiis optio, rerulorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae in aliquid? Nihil perferendis necessitatibus inventore distinctio animi dolore! Sequi officiis optio, reru",
            image:illustration,
        },
        {
            id:2,
            heading : "Point number 1",
            details : "lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obclorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae in aliquid? Nihil perferendis necessitatibus inventore distinctio animi dolore! Sequi officiis optio, reru",
            image:illustration1,
        },
        {
            id:3,
            heading : "Point number 1",
            details : "lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates ametvlorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae in aliquid? Nihil perferendis necessitatibus inventore distinctio animi dolore! Sequi officiis optio, reru",
            image:illustration2,
        },
        {
            id:4,
            heading : "Point number 1",
            details : "lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae in aliquid? Nihil perferendis necessitatibus inventore distinctio animi dolore! Sequi officiis optio, rerum modi incidunt odio quibusdam nihil eum necessitatibus nulla, libero tempore repellendus porro fugiat saepe tenetur in, perferendis quam deserunt reprehenderit voluptas adipisci! Id quam earum et fugit cupiditate officia, minus unde aspernatur, veniam odio modi repellendus nam incidunlorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae in aliquid? Nihil perferendis necessitatibus inventore distinctio animi dolore! Sequi officiis optio, reru",
            image:illustration3,
        },
        {
            id:5,
            heading : "Point number 1",
            details : "lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae inlorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates atque illo porro consequatur quia qui. Esse, facilis, totam nam officia explicabo dolores est iste eius qui quos veniam ipsam! Repellat tempora eaque et at, labore accusamus debitis facilis voluptatibus officia consectetur incidunt laborum iure, quis sapiente tenetur eligendi ipsum, nemo deleniti. Fugit, nemo provident non aliquid consequatur illum odio obcaecati laboriosam sint! Harum, quo. Blanditiis, numquam sequi. Totam illum quidem dignissimos error. Odit quo numquam omnis voluptas unde? Voluptates amet impedit recusandae in aliquid? Nihil perferendis necessitatibus inventore distinctio animi dolore! Sequi officiis optio, reru",
            image:illustration4,
        },
    ]
    
    const handleScroll=(()=>{
        const viewportHeight = window.innerHeight;
        window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
        console.log("scrolled")
    })

  return (
        <div className={individualProductStyles.main}> {/* scrollable, contains everything */}
            <div className={individualProductStyles.container}>{/* Fixed */}
                <div className={individualProductStyles.inner_container}> {/* contains contents */}
                    <div>
                        <h1 className={individualProductStyles.heading}>Document Search Platform</h1>
                        <p className={individualProductStyles.subheading}>Instantly find what you need — in any document, powered by AI.</p>
                    </div>
                     <div className={individualProductStyles.down_arrow} onClick={()=>handleScroll()}>
                        <MdKeyboardArrowDown />
                    </div>
                </div>
            </div>
            <div className={individualProductStyles.main2}>
                <div className={individualProductStyles.main2_container}>
                    <h1 className={individualProductStyles.heading1}>Document Search Platform</h1>    
                    <div className={individualProductStyles.details_container}>
                        <div className={individualProductStyles.left}>
                            <h3 className={individualProductStyles.details_subheading}>Subheading</h3>
                            <p className={individualProductStyles.details_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum nostrum quae incidunt ipsa natus veritatis delectus consequatur cumque quidem harum, voluptas dolor dolore sed. Deserunt qui earum excepturi eaque delectus optio odit. Eaque dolorem incidunt porro nesciunt neque numquam corrupti molestiae possimus, vel fuga excepturi ab provident asperiores aliquam beatae rerum ut animi earum esse nulla labore ratione officia consequuntur nostrum! Sequi harum quas, ratione earum tempore possimus deserunt. Neque obcaecati hic porro tenetur qui, vero culpa nobis praesentium veritatis ducimus harum iste fugiat temporibus voluptate ea error, corrupti accusantium deleniti eum excepturi! Quia quas quidem eum atque, aliquam quisquam in dolorem quae placeat quibusdam. Beatae saepe tempora illo corrupti est ullam asperiores minima nisi praesentium natus fugit, debitis eligendi magnam architecto quod delectus, explicabo tenetur, soluta quia. Nemo velit, non maiores voluptate vitae consequatur ad et id culpa dolor aliquid in, magni iste debitis. Odio, dignissimos sapiente. Qui possimus, doloribus iusto culpa beatae deleniti aliquid odio quis rem eius, facilis libero nostrum rerum assumenda provident esse repellat aspernatur amet mollitia natus nobis distinctio doloremque. Maiores nulla officiis amet, blanditiis, numquam dicta consequuntur laborum ipsum iure autem ea? Modi, aliquid molestiae facere voluptatem tempora sint tenetur? Nesciunt, a velit.</p>
                        </div>
                        <div className={individualProductStyles.right}>
                            <img src={illustration} alt=""  className={individualProductStyles.image}/>
                        </div>
                    </div>
                    <div className={individualProductStyles.details_container}>
                        <div className={individualProductStyles.left}>
                            <h3 className={individualProductStyles.details_subheading}>Subheading</h3>
                            <p className={individualProductStyles.details_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum nostrum quae incidunt ipsa natus veritatis delectus consequatur cumque quidem harum, voluptas dolor dolore sed. Deserunt qui earum excepturi eaque delectus optio odit. Eaque dolorem incidunt porro nesciunt neque numquam corrupti molestiae possimus, vel fuga excepturi ab provident asperiores aliquam beatae rerum ut animi earum esse nulla labore ratione officia consequuntur nostrum! Sequi harum quas, ratione earum tempore possimus deserunt. Neque obcaecati hic porro tenetur qui, vero culpa nobis praesentium veritatis ducimus harum iste fugiat temporibus voluptate ea error, corrupti accusantium deleniti eum excepturi! Quia quas quidem eum atque, aliquam quisquam in dolorem quae placeat quibusdam. Beatae saepe tempora illo corrupti est ullam asperiores minima nisi praesentium natus fugit, debitis eligendi magnam architecto quod delectus, explicabo tenetur, soluta quia. Nemo velit, non maiores voluptate vitae consequatur ad et id culpa dolor aliquid in, magni iste debitis. Odio, dignissimos sapiente. Qui possimus, doloribus iusto culpa beatae deleniti aliquid odio quis rem eius, facilis libero nostrum rerum assumenda provident esse repellat aspernatur amet mollitia natus nobis distinctio doloremque. Maiores nulla officiis amet, blanditiis, numquam dicta consequuntur laborum ipsum iure autem ea? Modi, aliquid molestiae facere voluptatem tempora sint tenetur? Nesciunt, a velit.</p>
                        </div>
                        <div className={individualProductStyles.right}>
                            <img src={illustration} alt=""  className={individualProductStyles.image}/>
                        </div>
                    </div>
                </div>
            </div> {/*Overlay which comes on top of container on scroll */}
        </div>
    )
}

export default IndividualProduct