import { FaArrowRight } from 'react-icons/fa';

const StickyBanner: React.FC = () => {
  return (
    <div className="fixed right-0 bottom-0 mb-4 mr-4 flex flex-col gap-4 z-50">
      <div className="bg-yellow-600 bg-opacity-75 text-white p-4 rounded-lg shadow-lg flex items-center hover:bg-opacity-50 transition-opacity duration-200">
        <a href="/purchase" className="text-lg font-bold text-white flex items-center gap-4" style={{ writingMode: 'vertical-rl' }}>
          <div className="flex flex-col items-center">
            <span>定期購入</span>
            <span className="text-sm">Subscription</span>
          </div>
          <FaArrowRight className="ml-2" />
        </a>
      </div>
      <div className="bg-yellow-600 bg-opacity-75 text-white p-4 rounded-lg shadow-lg flex items-center hover:bg-opacity-50 transition-opacity duration-200">
        <a href="/contact" className="text-lg font-bold text-white flex items-center gap-4" style={{ writingMode: 'vertical-rl' }}>
          <div className="flex flex-col items-center">
            <span>お問合せ</span>
            <span className="text-sm">Contact</span>
          </div>
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default StickyBanner;