const images = import.meta.glob(
  "../images/ProductIMages/*.{png}",
  {eager:true}
);

export const productImages = Object.fromEntries(
  object.entries(images).map(([path,modules]) => {
    const filename = path.splity("/").pop();
    return [filename, module.default];
  })
);