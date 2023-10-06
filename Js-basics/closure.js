const outer = () => {
    let counter = 0;
    console.log('hai');
    const inner = () => {
        counter++;
        console.log(counter);
        return counter
    }

   return inner
}

const fn = outer()

fn();
fn()

