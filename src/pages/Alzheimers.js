import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Alzheimers = () => {
  return (
    <section id="alzheimers" className="disease-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Alzheimer's Disease</h1>
          <p>
            Alzheimer's is a progressive neurological disorder that causes brain cells to degenerate and die, leading to memory loss, cognitive decline, and behavioral changes. It is the most common cause of dementia.
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

export default Alzheimers;