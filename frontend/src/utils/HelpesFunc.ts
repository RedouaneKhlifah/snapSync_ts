const convertImageToBase64 = (image: File) => {
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();

    filereader.readAsDataURL(image);

    filereader.onload = () => {
      resolve(filereader.result);
    };

    filereader.onerror = (error) => {
      reject(error);
    };
  });
};
const emptyFileInpute = (elementId: string) => {
  const inputFile = document.getElementById(
    elementId
  ) as HTMLInputElement | null;
  if (inputFile) {
    inputFile.value = "";
  }
};

export { convertImageToBase64, emptyFileInpute };
