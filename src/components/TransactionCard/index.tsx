import React from 'react'
import './styles'

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date

} from './styles'

interface CategoryProps {
  name: string;
  icon: string;
}

interface TransactionsCardProps {
  data: {  
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;}
}

interface Props {
  data: TransactionsCardProps;
}

export function TransactionCard({ data } : TransactionsCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
        </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}
