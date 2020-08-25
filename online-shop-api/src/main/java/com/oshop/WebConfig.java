package com.oshop;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.fasterxml.jackson.databind.SerializationFeature;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedHeaders("*").allowedMethods("*").allowedOrigins("*");
	}
	
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		converters.stream().filter(converter -> converter instanceof AbstractJackson2HttpMessageConverter)
		.findFirst().ifPresent(abstractConverter -> {
			AbstractJackson2HttpMessageConverter converter = (AbstractJackson2HttpMessageConverter) abstractConverter;
			converter.getObjectMapper().disable(SerializationFeature.FAIL_ON_EMPTY_BEANS);
		});
	}
}
