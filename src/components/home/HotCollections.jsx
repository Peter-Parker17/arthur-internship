import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import '../home/owl.css';
import Skeleton from "react-loading-skeleton";
import SkeletonLoader from "./Skeleton";

const HotCollections = () => {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections'); // Replace with your API endpoint
        const result = response.data
        setItem(result);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  

  const options = {
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="nft_coll" key={index}>
            <div className="nft_wrap">
              <div className="skeleton-box h-48"></div>
            </div>
            <div className="nft_coll_pp">
              <div className="skeleton-box h-12 w-12 rounded-full"></div>
            </div>
            <div className="nft_coll_info">
              <div className="skeleton-box h-6 w-32"></div>
              <div className="skeleton-box h-4 w-24 mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel className="owl-theme" {...options}>
    {items.map((item, index) => (
      <div className="nft_coll" key={index}>
        <div className="nft_wrap">
          <Link to="/item-details">
            <img src={`${item.nftImage}`} className="lazy img-fluid" alt="" />
          </Link>
        </div>
        <div className="nft_coll_pp">
          <Link to="/author">
            <img className="lazy pp-coll" src={`${item.authorImage}`} alt="" />
          </Link>
          <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
          <Link to="/explore">
            <h4>{`${item.title}`}</h4>
          </Link>
          <span>{`ERC-${item.code}`}</span>
        </div>
      </div>
    ))}
  </OwlCarousel>
        </div>
      </div>
    </section >
  );
};

export default HotCollections;
