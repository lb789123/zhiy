package com.zhiy.pojo;

public class Scjxx {
    private Integer id;

    private String username;

    private String school;

    private String kb;

    private String pc;

    public Scjxx(Integer id, String username, String school, String kb, String pc) {
        this.id = id;
        this.username = username;
        this.school = school;
        this.kb = kb;
        this.pc = pc;
    }

    public Scjxx() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school == null ? null : school.trim();
    }

    public String getKb() {
        return kb;
    }

    public void setKb(String kb) {
        this.kb = kb == null ? null : kb.trim();
    }

    public String getPc() {
        return pc;
    }

    public void setPc(String pc) {
        this.pc = pc == null ? null : pc.trim();
    }
}