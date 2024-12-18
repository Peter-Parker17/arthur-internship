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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');
        setItem(response.data);
        setLoading(false);  
      } catch (err) {
        setError('Error fetching data');
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
  if (loading) {
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
            <div className="col-lg-12">
              <div style={{ display: 'flex', gap: '20px' }}>
                {Array(4).fill(null).map((_, index) => (
                  <div className="nft_coll" key={index} style={{ flex: '1' }}>
                    <div className="nft_wrap">
                      <div className="skeleton-box" style={{ height: '250px' }}></div>
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
            </div>
          </div>
        </div>
      </section>
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
          <div className="col-lg-12">
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
      </div>
    </section>
  );
};
export default HotCollections;