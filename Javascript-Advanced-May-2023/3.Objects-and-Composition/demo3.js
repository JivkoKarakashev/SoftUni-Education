function demo3() {

    // function createRect(width, height) {
        
    //     function getArea() {
    //         return this.width * this.height;
    //     };
        
    //     const rect = {
    //         width,
    //         height,
    //         getArea,
    //     };
        
    //     return rect;
    // }
    
    // Factory Functions with Object Reference can avoid the pitfalls of using '.this' key word.

    function createRect(width, height) {
    
        const rect = { width, height };
    
        rect.getArea = () => {
            return rect.width * rect.height;
        };
    
        return rect;
    }
    const otherRect = createRect(20, 10);
    
    console.log(otherRect);
    console.log(otherRect.getArea());
}

demo3()