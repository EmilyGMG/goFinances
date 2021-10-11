import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionsCardProps } from '../../components/TransactionCard'

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  TransActions,
  Title,
  TransActionList,
} from './styles'

export interface DataListProps extends TransactionsCardProps {
  id: string
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: 'vendas',
        icon: 'dollar-sign'
      },
      date: '13/04/2021'
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '10/04/2021'
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel do apertamento",
      amount: "R$ 1.200,00",
      category: {
        name: 'vendas',
        icon: 'shopping-bag'
      },
      date: '10/04/2021'
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/36648933?v=4'} }/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Emily</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="17.400,00" 
          lastTransaction="Úlitma entrada dia 13 de abril"/>
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="1.259,00" 
          lastTransaction="Úlitma entrada dia 13 de abril"/>
        <HighlightCard 
          type="total"
          title="Total" 
          amount="16.141,00" 
          lastTransaction="01 à 16 de abril"/>
      </HighlightCards>

      <TransActions>
        <Title>Listagem</Title>

          <TransActionList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TransactionCard data={item} />}
          />
        
      </TransActions>
    </Container>
  )
}
