package com.app.main.java8;

public class FunctorTest {
	public static void main(String[] args) {
		FOptional<String> num = FOptional.of("42");
		FOptional<Integer> answer = num.flatMap(this::tryParse);
	}
	
	
}
