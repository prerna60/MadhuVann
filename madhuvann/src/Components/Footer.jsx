import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contactInfo}>
        <h2 style={styles.heading}>Contact us:</h2>
        <p>Email: example@email.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main Street, City</p>
      </div>

      <div style={styles.socialMedia}>
        <h2 style={styles.heading}>Social Media:</h2>
        {/* Add your social media icons/links here */}
      </div>

      <div style={styles.sitemap}>
        <h2 style={styles.heading}>Sitemap:</h2>
        {/* Add your sitemap links here */}
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    padding: "20px",
    color: "#333",
    marginTop: "20px",
  },
  contactInfo: {
    flex: 1,
    marginRight: "20px", // Add margin between sections on larger screens
  },
  socialMedia: {
    flex: 1,
    marginRight: "20px", // Add margin between sections on larger screens
  },
  sitemap: {
    flex: 1,
  },
  heading: {
    fontFamily: "DM Serif Display",
    fontWeight: "bold",
  },
  // Media Query for mobile screens
  "@media (max-width: 768px)": {
    footerContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    contactInfo: {
      marginRight: "0", // Remove margin on smaller screens
      marginBottom: "20px", // Add margin between sections on smaller screens
    },
    socialMedia: {
      marginRight: "0", // Remove margin on smaller screens
      marginBottom: "20px", // Add margin between sections on smaller screens
    },
    sitemap: {
      marginRight: "0", // Remove margin on smaller screens
    },
  },
};

export default Footer;
