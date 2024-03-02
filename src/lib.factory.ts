// src/lib.factory.ts
export function info() {
    return "lib.factory.info()" 
}

export function newFactory() {
    return new Factory();
}

class Factory {
    public info = ()=>{ return "class Factory.info()" }
}

