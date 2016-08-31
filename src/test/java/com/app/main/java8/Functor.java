package com.app.main.java8;

import com.google.common.base.Function;

interface Functor<T,F extends Functor<?,?>> {
    <R> F map(Function<T,R> f);
}


