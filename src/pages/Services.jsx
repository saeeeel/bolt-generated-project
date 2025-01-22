import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ServiceCard from '../components/ServiceCard'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 20px;
`

const Header = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WelcomeSection = styled.div`
  text-align: center;
  padding: 60px 0;
`

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`

const Subtitle = styled.p`
  color: var(--secondary-text);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;
`

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  color: var(--secondary-text);
`

const services = [
  {
    id: 'tarot',
    title: 'قراءة التاروت',
    description: 'اكتشف مستقبلك من خلال قراءة بطاقات التاروت',
    icon: <img src="/tarot-icon.svg" alt="تاروت" />,
    path: '/tarot'
  },
  {
    id: 'coffee',
    title: 'قراءة الفنجان',
    description: 'تعرف على ما تخفيه رموز فنجان القهوة الخاص بك',
    icon: <img src="/coffee-icon.svg" alt="فنجان" />,
    path: '/coffee'
  },
  {
    id: 'palm',
    title: 'قراءة الكف',
    description: 'اكتشف خطوط حياتك من خلال قراءة الكف',
    icon: <img src="/palm-icon.svg" alt="كف" />,
    path: '/palm'
  },
  {
    id: 'dream',
    title: 'تفسير الأحلام',
    description: 'افهم معنى أحلامك وإشاراتها',
    icon: <img src="/dream-icon.svg" alt="أحلام" />,
    path: '/dream'
  }
]

function Services() {
  const navigate = useNavigate()

  return (
    <Container>
      <Header>
        <h1>قراءة الطالع والفنجان</h1>
        <div>
          <a href="/login">تسجيل الدخول</a>
          <a href="/register">إنشاء حساب</a>
        </div>
      </Header>

      <WelcomeSection>
        <Title>مرحباً بك في عالم الروحانيات</Title>
        <Subtitle>
          اكتشف مستقبلك والحصول على إجابات الأسئلة من خلال خدماتنا المتنوعة
        </Subtitle>
      </WelcomeSection>

      <Grid>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            onClick={() => navigate(service.path)}
          />
        ))}
      </Grid>

      <Footer>
        جميع الحقوق محفوظة © 2025 قراءة الطالع والفنجان
      </Footer>
    </Container>
  )
}

export default Services
