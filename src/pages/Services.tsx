import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Размещение рекламы',
      description: 'Размещайте вашу рекламу на сети планшетов с максимальным охватом целевой аудитории',
      features: [
        'Широкий охват аудитории',
        'Гибкие тарифы',
        'Простое управление'
      ]
    },
    {
      title: 'Аналитика и отчеты',
      description: 'Получайте детальную статистику по каждому показу в режиме реального времени',
      features: [
        'Статистика в реальном времени',
        'Детальные отчеты',
        'Экспорт данных'
      ]
    },
    {
      title: 'Таргетирование',
      description: 'Точное таргетирование по геолокации и времени для максимальной эффективности',
      features: [
        'Геолокационное таргетирование',
        'Временное таргетирование',
        'Настройка аудитории'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Наши услуги
        </Typography>
        
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Комплексные решения для эффективной рекламы
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography paragraph color="text.secondary">
                      {service.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {service.features.map((feature, idx) => (
                        <Typography component="li" key={idx} sx={{ mb: 1 }}>
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button variant="contained" color="primary" fullWidth>
                      Подробнее
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Services; 