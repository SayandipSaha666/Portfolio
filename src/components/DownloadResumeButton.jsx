export default function DownloadResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sayandip_Saha_Resume.pdf"; 
    link.download = "Sayandip_Saha_Resume.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="
        px-6 py-2 
        rounded-xl 
        bg-indigo-600 
        text-white 
        font-medium
        shadow-md 
        hover:bg-indigo-700
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      Download Resume
    </button>
  );
}
