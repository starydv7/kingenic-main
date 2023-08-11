
import React, { useState, useEffect } from 'react';
import style from "../css/Progressbar.module.css"
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const duration = 12000; // 5 seconds in milliseconds

  useEffect(() => {
    let intervalId;
    let startTime;

    const animateProgress = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progressValue = Math.min((elapsed / duration) * 100, 100);
      setProgress(progressValue);

      if (progressValue < 100) {
        intervalId = requestAnimationFrame(animateProgress);
      } else {
        // Reset the progress to 0 after reaching 100%
        setProgress(0);
        // Restart the animation after 5 seconds
        setTimeout(() => {
          startTime = null;
          intervalId = requestAnimationFrame(animateProgress);
        }, 5000);
      }
    };

    intervalId = requestAnimationFrame(animateProgress);

    return () => {
      // Clear the interval when the component unmounts
      cancelAnimationFrame(intervalId);
    };
  }, []);

  return (
    <div className={style['progress-container']}>
      <div
        className={style['progress-bar']}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
