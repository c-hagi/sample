//Square（マス目）コンポーネントは 1 つの <button> をレンダーしている。

export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}  
    </button>
);
}  

//export default 〇〇 は、〇〇コンポーネントを
//他のモジュールで使用できるようにしている

//props はコンポーネントに渡される任意のデータ
//prop はコンポーネント内に記述され、HTML属性と同じ構文を使用する。
//App 関数の引数を変更して、props をパラメーターとして受け入れられるようにする。

//HTMLと同じように属性をもつ必要がある
//className属性＝HTMLのclass属性(JSX は JavaScript であるため使用できない)


//onClick={props.onClick}> {props.value} は、Board.jsのL10～11に記載あり 
