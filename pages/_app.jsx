import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-w-min bg-black min-h-screen text-white py-4 select-none cursor-text">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
