import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MultipleSclerosis = () => {
  return (
    <section id="multiple-sclerosis" className="disease-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Multiple Sclerosis (MS)</h1>
          <p>
            Multiple Sclerosis is a chronic autoimmune disease that affects the central nervous system. It disrupts the flow of information within the brain and between the brain and body.
          </p>
          <Button
            variant="primary"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1069023/"
            target="_blank"
          >
            Read More
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default MultipleSclerosis;