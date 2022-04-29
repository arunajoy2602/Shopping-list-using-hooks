import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, useLocation } from "react-router-dom";
// import withDataFetching from '../withDataFetching';
import { ListsContext } from '../Context/ListsContextProvider';
import { ItemsContext } from '../Context/ItemsContextProvider';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const List = () => {
  const { list, getListRequest } = React.useContext(ListsContext);
  const { loading, error, items, getItemsRequest } =
    React.useContext(ItemsContext);
  const location = useLocation();
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!list.id) {
      getListRequest(params.id);
    }

    if (!items.length > 0) {
      getItemsRequest(params.id);
    };
  }, [items, list, params.id, getItemsRequest, getListRequest]);


  return !loading && !error ? (
    <>
      {list && <SubHeader
        goBack={() => navigate(-1)}
        title={list.title}
        openForm={() => navigate(`${location.pathname}/new`)}
      />}
      <ListItemWrapper>
        {items && items.map(item => <ListItem key={item.id} data={item} />)}
      </ListItemWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};
export default List;


// export default withDataFetching({
//   dataSource:
//     'https://my-json-server.typicode.com/pranayfpackt/-React-Projects/items',
// })(List);
