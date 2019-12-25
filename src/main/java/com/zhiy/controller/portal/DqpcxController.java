package com.zhiy.controller.portal;

import com.github.pagehelper.PageInfo;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Gxxxb;
import com.zhiy.service.IDqpcxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * Created by bu
 */
@Controller
@RequestMapping("/dqpcx/")

public class DqpcxController {
    @Autowired
    IDqpcxService iDqpcxService;

    @RequestMapping(value = "getdqpcxzsd.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> listzsd(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String zsd){
        pageSize=1000;
        return iDqpcxService.getDqpcxListzsd(pageNum,pageSize,zsd);
    }
    @RequestMapping(value = "getdqpcxzsdke.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> listkezsd(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String zsd,String kelei,String pcmc){
        pageSize=1000;
        return iDqpcxService.getDqpcxListkezsd(pageNum,pageSize,zsd,kelei,pcmc);
    }
}
