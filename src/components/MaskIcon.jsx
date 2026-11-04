// Maska ilə ikon: SVG-nin formasını götürür, rəngi isə CSS ilə verilir.
// Bu sayədə ikonu istənilən rəngə (məsələn hover-da qırmızı) boyamaq olur.
// src: ikon faylının yolu, className: əlavə rəng class-ı (məsələn "mask-icon--red")
function MaskIcon({ src, className = '' }) {
  const style = {
    maskImage: `url(${src})`,
    WebkitMaskImage: `url(${src})`,
  };

  return <span className={`mask-icon ${className}`} style={style} aria-hidden="true" />;
}

export default MaskIcon;
