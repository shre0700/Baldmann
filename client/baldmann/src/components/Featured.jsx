
import React, { useRef } from "react";
import "./Featured.css";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const blogs = [
  {
        id:1,
        image:require("../pages/blog12.jpg"),
        title:"Gaming with Your Mind: The Future of BCI-Driven Video Games",
        author:"Pritha Sharma",
        link:"/blog/12",
      },
      {
        id:2,
        image:require("../pages/blog11.png"),
        title:"Machine Learning Is Everywhere",
        author:"Khushi Yadav",
        link:"/blog/11",
    
      },
      {
        id: 3,
        image: require("../pages/office-blog.jpg"),
          title:
            "Empowering Lives After Adversity with BaldMann’s AI-Powered Bald Buddy",
          author: "The Office",
          link: "/blog/10",
      },
        {
            id: 4,
            image: require("../pages/blog8a.jpg"),
              title:
                "The Right Library: A Key to Smooth Arduino Projects",
              author: "Pritha Sharma",
              link: "/blog/8",
        },
        {
            id: 5,
            image: require("../pages/blog9a.jpg"),
              title:
                "Could BCIs Turn Your Most Romantic Memory into a Virtual Reality Experience?",
              author: "Simrat Kaur",
              link: "/blog/9",
           },
      {
        id: 6,
        image: require("../assests/k1_a.jpg"),
        title: "Brainwaves: What Your Brain is Really Doing...",
        author: "Khushi Yadav",
        link: "/blog/7",
      },
    
      {
        id: 7,
        image: require("../pages/s_a2.jpg"),
        title: "The Future of Human-Computer Interaction",
        author: "Sanjana Sudarsan",
        link: "/blog/6",
      },
      {
        id: 8,
        image: require("../pages/Picture1.png"),
        title: "The Future of Romance: Could a BCI...",
        author: "Simrat Kaur",
        link: "/blog/5",
      },
      {
        id: 9,
        image: require("./karthik.jpg"),
        title: "Who should upgrade to ESP32 from Arduino?",
        author: "Sanjana Sudarsan",
        link: "/blog/1",
      },
      {
        id: 10,
        image: require("./arduino.jpg"),
        title: "Hula-Looping with Arduino",
        author: "Pritha Sharma",
        link: "/blog/3",
      },
      {
        id: 11,
        image: require("./ml.png"),
        title: "Importance of Balanced Datasets in Emotion Prediction Model.",
        author: "Rakesh Prajapati",
        link: "/blog/4",
      },
      {
        id: 12,
        image: require("./esp.jpg"),
        title:
          "Mind the Gap: How Neurotransmitters Affect Brain-Computer Interfaces",
        author: "Hritika Pathak",
        link: "/blog/2",
      }
];

const Featured = () => {
    const blogListRef = useRef(null);

    const handleNext = () => {
        if (blogListRef.current) {
            blogListRef.current.scrollBy({
                left: 300, // Adjust scroll distance for each click
                behavior: "smooth",
            });
        }
    };

    const handlePrev = () => {
        if (blogListRef.current) {
            blogListRef.current.scrollBy({
                left: -300, // Scroll backward
                behavior: "smooth",
            });
        }
    };
    

    return (
        <div className="featured-section">
            <p className="featured-title">Blogs</p>
            <div className="latest-blog-card">
                <img
                    src={blogs[0].image}
                    alt="Latest Blog"
                    className="latest-blog-image"
                />
                <div className="latest-blog-content">
                    <p className="latest-blog-title">{blogs[0].title}</p>
                    <p className="latest-blog-author">by {blogs[0].author}</p>
                    <Link to={blogs[0].link} className="latest-blog-read-link">
                        <button className="latest-blog-read">Read More</button>
                    </Link>
                </div>
            </div>

            {/* Other Blogs */}
            <div className="other-blogs">
                <div className="arrow left-arrow" onClick={handlePrev}>
                    <IoIosArrowDropleftCircle />
                </div>
                <div className="blogs-list" ref={blogListRef}>
                    {blogs.map((blog) => (
                        <div className="blog-card" key={blog.id}>
                            <img src={blog.image} alt="Blog Cover" className="blog-image" />
                            <div className="blog-content">
                                <p className="blog-title">{blog.title}</p>
                                <p className="blog-author">by {blog.author}</p>
                                <Link to={blog.link} className="blog-read-link">
                                    <button className="blog-read">Read More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrow right-arrow" onClick={handleNext}>
                    <IoIosArrowDroprightCircle />
                </div>
            </div>
        </div>
    );
};

export default Featured;

