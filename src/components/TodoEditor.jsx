import '../assets/css/TodoEditor.css'

export function TodoEditor({ indx, content, onClickSave }) {
    return (
        <div className="edit">
            <textarea defaultValue={content} onChange={e => { content = e.target.value }}></textarea>
            <button onClick={() => onClickSave(indx, {content} )}>Save</button>
        </div>
    )
}