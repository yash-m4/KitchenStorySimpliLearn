package com.kitchenStory.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kitchenStory.model.User;
import com.kitchenStory.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;

	public void addUser(User user) {
		userRepository.save(user);
	}
	
	public User validateUser(String username,String password) {
		return userRepository.findByUsernameAndPassword(username, password);
	}
	
	
}
