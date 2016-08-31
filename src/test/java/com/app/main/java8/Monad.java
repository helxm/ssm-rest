package com.app.main.java8;

import com.google.common.base.Function;

interface Monad<T,M extends Monad<?,?>> extends Functor<T,M> {
    M flatMap(Function<T,M> f);
}
