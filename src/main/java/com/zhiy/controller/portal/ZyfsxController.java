package com.zhiy.controller.portal;
import com.github.pagehelper.PageInfo;
import com.zhiy.common.Const;
import com.zhiy.common.ServerResponse;
import com.zhiy.pojo.Zyfsx;
import com.zhiy.service.IZyfsxService;
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
@RequestMapping("/zyfsx/")
public class ZyfsxController {
    @Autowired
    IZyfsxService iZyfsxService;

    @RequestMapping(value = "getzyList.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> ZyList(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String ksdq,String gxmc,String kb,String pc){
        pageSize=1000;
        return iZyfsxService.getzyList(pageNum,pageSize,ksdq,gxmc,kb,pc);
    }
    @RequestMapping(value = "getzyfsList.do",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<PageInfo> ZyfsList(@RequestParam(value = "pageNum",defaultValue = "1") int pageNum, @RequestParam(value = "pageSize",defaultValue = "100") int pageSize,String ksdq,String gxmc,String kb,String pc,String zymc){
        pageSize=1000;
        return iZyfsxService.getzyfsxList(pageNum,pageSize,ksdq,gxmc,kb,pc,zymc);
    }
}
