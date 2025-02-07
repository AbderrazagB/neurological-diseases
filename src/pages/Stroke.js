import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Stroke = () => {
  return (
    <section id="stroke" className="disease-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Stroke (AVC)</h1>
          <p>
            A stroke occurs when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. It is a medical emergency that requires immediate attention.
          </p>
          <Button
            variant="primary"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1069025/"
            target="_blank"
          >
            Read More
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Stroke;