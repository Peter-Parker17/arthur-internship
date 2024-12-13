import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // import styles

const SkeletonLoader = () => {
  return (
    <div>
      <Skeleton height={30} style={{ marginBottom: 10 }} />
      <Skeleton height={200} style={{ marginBottom: 10 }} />
      <Skeleton height={30} width={150} />
    </div>
  );
};

export default SkeletonLoader;