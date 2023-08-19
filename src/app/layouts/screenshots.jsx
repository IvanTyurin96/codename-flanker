import api from "../api";
import ScreenshotsGrid from "../components/screenshotsGrid";

const Screenshots = () => {
  const screenshots = api.screenshots.fetchAll();

  return (
    <>
      <div className="pt-3 pb-3">
        <ScreenshotsGrid screenshots={screenshots} isCarousel={false} />
      </div>
    </>
  );
};

export default Screenshots;
