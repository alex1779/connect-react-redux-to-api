import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Store from '../redux/store';

function Component() {
  const [users, isLoading, error] = useSelector(Store);
  const dispatch = useDispatch();
  const emptyFunction = () => {};
  useEffect((emptyFunction, []) => {
    console.log();
  }, []);

  return (
    <div>
      <h4>{isLoading}</h4>
      <h2>{error}</h2>

      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.firstName}
            {' '}
            +
            {item.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Component;
