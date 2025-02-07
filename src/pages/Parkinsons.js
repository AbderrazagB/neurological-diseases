import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Parkinsons = () => {
  return (
    <section id="parkinsons" className="disease-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Parkinson's Disease</h1>
          <p>
            Parkinson's is a progressive nervous system disorder that affects movement. Symptoms start gradually, sometimes with a barely noticeable tremor in one hand, and can lead to stiffness, slowing of movement, and balance problems.
          </p>
          <Button
            variant="primary"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1069024/"
            target="_blank"
          >
            Read More
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Parkinsons;