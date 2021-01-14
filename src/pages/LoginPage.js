import { observer, useLocalObservable } from 'mobx-react-lite';
import { AccountOutlineIcon, LockOutlineIcon } from '../components/icons';
import { useStore } from '../store';
import backgroundImage from '../media/turbo.jpg';


export const LoginPage = observer(() => {
  const store = useStore();
  const state = useLocalObservable(() => ({
    login: '',
    password: '',
  }));

  function onSubmit(e) {
    e.preventDefault();

    if (!store.tryLogin(state.login, state.password)) {
      const form = document.querySelector('form');
      form.classList.add('animate-shake');
      setTimeout(
        () => form.classList.remove('animate-shake'),
        1000
      );
    }
  }

  return (
    <div className="relative">
      <div className="relative flex items-center justify-center bg-gray-500 overflow-hidden h-screen">
        <form className="bg-white px-6 py-8 rounded-xl z-10 w-80" onSubmit={onSubmit}>
          <h4 className="text-xl text-blue-700 text-center">Logowanie</h4>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Login</div>
            <div className="flex items-center">
              <div className="opacity-50 w-10"><AccountOutlineIcon/></div>
              <input autoFocus type="text" value={state.login} onChange={e => state.login = e.target.value} className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
            </div>
          </label>

          <label className="block mx-4 my-4">
            <div className="text-xs text-gray-500">Hasło</div>
            <div className="flex items-center">
              <div className="opacity-50 w-10"><LockOutlineIcon/></div>
              <input type="password" value={state.password} onChange={e => state.password = e.target.value} className="py-1 w-full focus:outline-none border-b-2 border-dashed focus:border-blue-500 focus:border-solid"/>
            </div>
          </label>

          <div className="mt-10">
            <button type="submit" className="px-3 py-2 rounded w-full bg-blue-800 hover:bg-blue-700 active:bg-blue-900 text-white transition-colors">Zaloguj</button>
          </div>
        </form>

        <picture className="absolute inset-0 opacity-10 z-0">
          <img src={backgroundImage} className="object-cover w-full h-full" alt=""/>
        </picture>
      </div>
    </div>
  );
});
