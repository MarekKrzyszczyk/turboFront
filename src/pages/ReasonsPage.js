import { observer, useLocalObservable } from 'mobx-react-lite';
import { PencilIcon } from '../components/icons';
import { useStore } from '../store';
import { MainLayout } from './layouts/MainLayout';


export const ReasonsPage = observer(() => {
  const store = useStore();
  const state = useLocalObservable(() => ({
    reasons: store.reasons.slice().sort((a, b) => a > b ? -1 : 1),
    editing: null,

    startEdit(id) {
      this.editing = id;
      setTimeout(() => {
        document.querySelector('input').focus();
      }, 10);
    },
    stopEdit() {
      this.editing = null;
    },
  }));

  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-2xl px-10 py-10">
        <h4 className="text-xl font-medium text-gray-800">Powody usterek</h4>

        <div className="mt-8 -mx-4">
          {state.reasons.map(reason => (
            state.editing === reason.id
              ? <div className="py-1">
                  <input type="text" value={reason.name} onChange={e => reason.name = e.target.value} onBlur={()=> state.stopEdit()} className="py-2 px-4 w-full focus:outline-none border-2 rounded-sm"/>
                </div>
              : <div className="flex items-center justify-between px-4 py-2 hover:bg-blue-50 cursor-pointer">
                  <span>{reason.name}</span>
                  <span><button className="p-1 text-gray-400 hover:text-green-700 transition" onClick={()=> state.startEdit(reason.id)}><PencilIcon/></button></span>
                </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
});