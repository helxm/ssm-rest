package com.app.main.java8;

import com.google.common.base.Function;

class FOptional<T> implements Functor<T,FOptional<?>> {

    private final T valueOrNull;

    private FOptional(T valueOrNull) {
        this.valueOrNull = valueOrNull;
    }

    @Override
	public <R> FOptional<?> map(Function<T, R> f) {
		 if (valueOrNull == null)
	            return empty();
	        else
	            return of(f.apply(valueOrNull));
	}

    public static <T> FOptional<T> of(T a) {
        return new FOptional<T>(a);
    }

    public static <T> FOptional<T> empty() {
        return new FOptional<T>(null);
    }

    public static FOptional<Integer> tryParse(String s) {
	    try {
	        final int i = Integer.parseInt(s);
	        return FOptional.of(i);
	    } catch (NumberFormatException e) {
	        return FOptional.empty();
	    }
	}
    
}