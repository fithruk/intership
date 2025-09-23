import { CardMedia } from "@mui/material";

interface LazyCardMediaProps {
  image: string;
  title: string;
  className?: string;
}

const LazyCardMedia = ({ image, title, className }: LazyCardMediaProps) => {
  return <CardMedia image={image} title={title} className={className} />;
};

export default LazyCardMedia;
