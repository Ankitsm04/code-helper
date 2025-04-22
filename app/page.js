// pages/index.js
'use client'
export default function Home() {
  // Store each link in a separate variable
  const link = "https://drive.google.com/drive/folders/11TTYM9K29qo0htnSRKYN1FaTv2Bc05Fg?usp=sharing";

  // Function to handle the redirection
  const redirectToLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>CodeHelp</h1>

      <div className="flex flex-center justify-center">
      <button onClick={() => redirectToLink(link)} style={{ margin: '10px' }}>FULL MARKS 100%</button>
      </div>
    </div>
  );
}
