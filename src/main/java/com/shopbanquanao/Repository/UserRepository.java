package com.shopbanquanao.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shopbanquanao.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByMobile(String mobile);
}
