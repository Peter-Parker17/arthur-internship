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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


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
          <OwlCarousel>
          {items.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={`${item.nftImage}`} className="owl lazy img-fluid" alt="" />
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
            </div>
          ))}
          <button className="button__previous" role="presentation">previous</button>
          <button className="button__next" role="presentation">next</button>
          </OwlCarousel>
      </div>
    </div>
      </section >
    );
  };

export default HotCollections;
