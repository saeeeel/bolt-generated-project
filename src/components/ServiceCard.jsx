import styled from 'styled-components'

const Card = styled.div`
  background: var(--card-background);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`

const Icon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Title = styled.h3`
  color: #000;
  font-size: 24px;
  margin: 0;
`

const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`

const Button = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`

function ServiceCard({ title, description, icon, onClick }) {
  return (
    <Card onClick={onClick}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>اطلب الخدمة</Button>
    </Card>
  )
}

export default ServiceCard
