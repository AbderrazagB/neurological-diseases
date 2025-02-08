import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DiseaseCard = ({ title, description, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-4">
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button as={Link} to={link} variant="primary" className='mt-3'>
            Learn More
          </Button>
        </Card.ImgOverlay>
      </Card>
    </motion.div>
  );
};

export default DiseaseCard;