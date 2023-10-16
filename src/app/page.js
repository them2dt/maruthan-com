export default function Home() {
  const openSection = () => {
    
  };

  return (
    <main>
      <div className="intro">
        <div className="intro-grid">
          <div className="grid-item-1">
            <button className="grid-item-1-bubble">
              <div className="grid-item-text">about</div>
            </button>
          </div>
          <div className="grid-item-2">
            <button className="grid-item-2-bubble">
              <div className="grid-item-text">gallery</div>
            </button>
          </div>
          <div className="grid-item-3">
            <button className="grid-item-3-bubble">
              <div className="grid-item-text">services</div>
            </button>
          </div>
          <div className="grid-item-4">
            <button className="grid-item-4-bubble">
              <div className="grid-item-text">contact</div>
            </button>
          </div>
          <div className="grid-item-5">
            <button className="grid-item-5-bubble">
              <div className="title">MARUTHAN THANABALASINGAM</div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
