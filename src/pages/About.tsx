import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          О нас
        </Typography>
        
        <Box sx={{ mt: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Наша миссия
              </Typography>
              <Typography paragraph>
                AdTonic - это инновационная рекламная платформа, которая революционизирует способ размещения рекламы на цифровых устройствах. Мы стремимся предоставить рекламодателям максимально эффективные инструменты для достижения их целей.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Наши ценности
              </Typography>
              <Typography paragraph>
                Мы верим в инновации, прозрачность и эффективность. Каждое наше решение направлено на то, чтобы помочь рекламодателям достичь максимальных результатов при минимальных затратах.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            Почему выбирают нас
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Инновации',
                description: 'Мы постоянно развиваемся и внедряем новые технологии для улучшения эффективности рекламы'
              },
              {
                title: 'Надежность',
                description: 'Стабильная работа платформы и гарантированное размещение рекламы'
              },
              {
                title: 'Поддержка',
                description: 'Профессиональная команда поддержки всегда готова помочь вам'
              }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, height: '100%' }}>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About; 