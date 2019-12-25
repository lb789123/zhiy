package com.zhiy.controller.portal;
import com.github.pagehelper.PageInfo;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.dao.ScjMapper;
import com.zhiy.pojo.User;
import com.zhiy.service.IScjService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpSession;
/**
 * Created by bu
 */
@Controller
@RequestMapping("/cart/")
public class CartController {
    @Autowired
    IScjService iScjService;
    @RequestMapping("get_cart_product_count.do")
    @ResponseBody
    public ServerResponse<Integer> getCartProductCount(HttpSession session){
        User user = (User)session.getAttribute(Const.CURRENT_USER);
        if(user ==null){
            return ServerResponse.createBySuccess(0);
        }
        return iScjService.getCartProductCount(user.getUsername());
    }

}
