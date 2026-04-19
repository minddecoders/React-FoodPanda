import style from './home.module.css'
import qrImag from'../../assets/image.png'
export default function Card() {
  return (
    <div className={style.card}>
      <img src={qrImag} />
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  );
}