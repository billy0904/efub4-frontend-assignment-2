function forEach<T>(arr: T[], callback: (item: T) => void){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

// forEach 메서드는 배열의 모든 요소에 콜백 함수를 한 번씩 수행해주는 메서드
// forEach 메서드는 반환값이 없다. 