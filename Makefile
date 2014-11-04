MARKDOWN := ./MultiMarkdown-4/multimarkdown
MDFLAGS :=  --process-html
MDFILES := $(wildcard *.md)
HTMLS := $(MDFILES:.md=.html)

all: $(HTMLS)

clean:
	rm -f $(HTMLS)

.SUFFIXES: .md .html
%.html: %.md header.html footer.html Makefile $(MARKDOWN)
	@cat header.html > $@
	$(MARKDOWN) $(MDFLAGS) < $< >> $@
	@cat footer.html >> $@

./MultiMarkdown-4/multimarkdown:
	git clone https://github.com/fletcher/MultiMarkdown-4.git
	cd MultiMarkdown-4 && git submodule init && git submodule update && make

.PHONY: all clean install-mmd
