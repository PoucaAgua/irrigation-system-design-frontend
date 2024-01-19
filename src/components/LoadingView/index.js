import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import imagesLoaded from "imagesloaded";
import "./style.css";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startLoadingTime = new Date().getTime();

    const AsyncRequest = async () => {
      const images = document.querySelectorAll("img");

      imagesLoaded(images, { background: true }, async () => {
        const endLoadingTime = new Date().getTime();
        const loadingTime = endLoadingTime - startLoadingTime;

        try {
          await new Promise((resolve) => setTimeout(resolve, loadingTime));
          setLoading(false);
        } catch (error) {
          console.error("error during loading:", error);
          setLoading(false);
        }
      });
    };

    AsyncRequest();
  }, []);

  return (
    <div
      id="loadingSpinner"
      style={{
        backgroundColor: loading ? "#fff" : "transparent",
        pointerEvents: loading ? "all" : "none",
      }}
    >
      {loading && (
        <div>
          <SyncLoader loading={loading} color="#000" size={60} />
          <p className="text-center" id="Text">
            Loading
          </p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
